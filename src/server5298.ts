
const express = require('express')
import {handler5298} from "./handler5298";
const app = express()
app.get('/5298', handler5298)
app.listen(3000, () => {})
        