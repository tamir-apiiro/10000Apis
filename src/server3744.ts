
const express = require('express')
import {handler3744} from "./handler3744";
const app = express()
app.get('/3744', handler3744)
app.listen(3000, () => {})
        