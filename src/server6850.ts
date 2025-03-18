
const express = require('express')
import {handler6850} from "./handler6850";
const app = express()
app.get('/6850', handler6850)
app.listen(3000, () => {})
        