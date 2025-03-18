
const express = require('express')
import {handler7879} from "./handler7879";
const app = express()
app.get('/7879', handler7879)
app.listen(3000, () => {})
        