
const express = require('express')
import {handler879} from "./handler879";
const app = express()
app.get('/879', handler879)
app.listen(3000, () => {})
        