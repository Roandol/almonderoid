<div class="flex justify-center text-center w-full centerWindow">
	<ol>
		<li class="title-game">
			<div class="firework" />
			<div class="firework" />
			<div class="firework" />
			Almonderoid
		</li>
		<li class="options-menu">
			<a href="game">Game</a>
		</li>
		<li class="options-menu">
			<a href="controls">Controls</a>
		</li>
		<li class="options-menu">
			<a href="config">Settings</a>
		</li>
	</ol>
</div>

<style>
	.centerWindow {
		@apply absolute;
		top: 30%;
		transform: translateY(-30%);
	}

	.title-game {
		font-size: 46px;
		-webkit-text-stroke: 2px #ffa500;
		@apply my-4;
		position: relative;
		animation: queda 2s infinite;
	}

	.firework {
		position: absolute;
		width: 10px;
		height: 10px;
		background: red;
		opacity: 0;
		animation: fireworks 1s linear infinite;
	}

	.firework:nth-child(2) {
		left: 20px;
		animation-delay: 0.5s;
	}

	.firework:nth-child(3) {
		right: 0;
		animation-delay: 1s;
	}

	.options-menu {
		@apply my-2;
	}

	.options-menu:hover {
		color: #fe3637;
	}

	@keyframes fireworks {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
		}
		100% {
			transform: translateY(-100px) rotate(360deg);
			opacity: 0;
		}
	}

	@keyframes queda {
		0% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-5px) translateY(2px);
		}
		50% {
			transform: translateX(5px) translateY(1px);
		}
		75% {
			transform: translateX(-5px) translateY(-3px);
		}
		100% {
			transform: translateX(0px) translateY(0px);
		}
	}
</style>
