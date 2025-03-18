
const express = require('express')
import {handler5934} from "./handler5934";
const app = express()
app.get('/5934', handler5934)
app.listen(3000, () => {})
        