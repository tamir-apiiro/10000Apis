
const express = require('express')
import {handler3718} from "./handler3718";
const app = express()
app.get('/3718', handler3718)
app.listen(3000, () => {})
        