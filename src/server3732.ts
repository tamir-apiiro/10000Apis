
const express = require('express')
import {handler3732} from "./handler3732";
const app = express()
app.get('/3732', handler3732)
app.listen(3000, () => {})
        