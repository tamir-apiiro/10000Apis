
const express = require('express')
import {handler5352} from "./handler5352";
const app = express()
app.get('/5352', handler5352)
app.listen(3000, () => {})
        