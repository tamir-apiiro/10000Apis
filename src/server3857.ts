
const express = require('express')
import {handler3857} from "./handler3857";
const app = express()
app.get('/3857', handler3857)
app.listen(3000, () => {})
        