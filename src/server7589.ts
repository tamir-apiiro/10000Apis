
const express = require('express')
import {handler7589} from "./handler7589";
const app = express()
app.get('/7589', handler7589)
app.listen(3000, () => {})
        