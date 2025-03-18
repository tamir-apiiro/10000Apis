
const express = require('express')
import {handler3059} from "./handler3059";
const app = express()
app.get('/3059', handler3059)
app.listen(3000, () => {})
        