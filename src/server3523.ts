
const express = require('express')
import {handler3523} from "./handler3523";
const app = express()
app.get('/3523', handler3523)
app.listen(3000, () => {})
        