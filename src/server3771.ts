
const express = require('express')
import {handler3771} from "./handler3771";
const app = express()
app.get('/3771', handler3771)
app.listen(3000, () => {})
        