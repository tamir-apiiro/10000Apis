
const express = require('express')
import {handler3279} from "./handler3279";
const app = express()
app.get('/3279', handler3279)
app.listen(3000, () => {})
        