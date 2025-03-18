
const express = require('express')
import {handler3299} from "./handler3299";
const app = express()
app.get('/3299', handler3299)
app.listen(3000, () => {})
        