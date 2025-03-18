
const express = require('express')
import {handler708} from "./handler708";
const app = express()
app.get('/708', handler708)
app.listen(3000, () => {})
        