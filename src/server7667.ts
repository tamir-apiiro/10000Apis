
const express = require('express')
import {handler7667} from "./handler7667";
const app = express()
app.get('/7667', handler7667)
app.listen(3000, () => {})
        