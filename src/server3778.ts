
const express = require('express')
import {handler3778} from "./handler3778";
const app = express()
app.get('/3778', handler3778)
app.listen(3000, () => {})
        