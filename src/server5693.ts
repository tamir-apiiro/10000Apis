
const express = require('express')
import {handler5693} from "./handler5693";
const app = express()
app.get('/5693', handler5693)
app.listen(3000, () => {})
        