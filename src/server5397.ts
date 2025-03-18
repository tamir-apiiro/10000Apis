
const express = require('express')
import {handler5397} from "./handler5397";
const app = express()
app.get('/5397', handler5397)
app.listen(3000, () => {})
        