
const express = require('express')
import {handler92} from "./handler92";
const app = express()
app.get('/92', handler92)
app.listen(3000, () => {})
        