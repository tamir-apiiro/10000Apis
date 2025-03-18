
const express = require('express')
import {handler3793} from "./handler3793";
const app = express()
app.get('/3793', handler3793)
app.listen(3000, () => {})
        