
const express = require('express')
import {handler3047} from "./handler3047";
const app = express()
app.get('/3047', handler3047)
app.listen(3000, () => {})
        