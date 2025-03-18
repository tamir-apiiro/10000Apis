
const express = require('express')
import {handler5894} from "./handler5894";
const app = express()
app.get('/5894', handler5894)
app.listen(3000, () => {})
        