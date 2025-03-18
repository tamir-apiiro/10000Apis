
const express = require('express')
import {handler3795} from "./handler3795";
const app = express()
app.get('/3795', handler3795)
app.listen(3000, () => {})
        