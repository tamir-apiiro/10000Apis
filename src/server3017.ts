
const express = require('express')
import {handler3017} from "./handler3017";
const app = express()
app.get('/3017', handler3017)
app.listen(3000, () => {})
        