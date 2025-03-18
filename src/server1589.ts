
const express = require('express')
import {handler1589} from "./handler1589";
const app = express()
app.get('/1589', handler1589)
app.listen(3000, () => {})
        