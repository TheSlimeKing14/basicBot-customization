(function () {
    
    //Change this to your GitHub username so you don't have to modify so many things.
    var fork = "Yemasthui";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "SlimeBot",
        language: "english",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
        startupCap: 50, // 1-200
        startupVolume: 50, // 0-100
        startupEmoji: true, // true or false
        autowoot: true,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 60,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 2,
        historySkip: true,
        timeGuard: true,
        maximumSongLength: 7,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: 1,
        skipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 3,
        motd: "A teljes élményért: https://rcs.radiant.dj/",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: "http://slimeking14.wix.com/slimedj#!oplist/c24vq",
        rulesLink: "http://slimeking14.wix.com/slimedj#!rules/c1h6a",
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: "http://slimeking14.wix.com/slimedj",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/NSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/OPlist.json",
            BANNED: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/BANNEDlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Yemasthui/basicBot/master/basicBot.js", extend);

}).call(this);
