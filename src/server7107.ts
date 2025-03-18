
const express = require('express')
import {handler7107} from "./handler7107";
const app = express()
app.get('/7107', handler7107)
app.listen(3000, () => {})
        