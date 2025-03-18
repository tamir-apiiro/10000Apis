
const express = require('express')
import {handler8107} from "./handler8107";
const app = express()
app.get('/8107', handler8107)
app.listen(3000, () => {})
        