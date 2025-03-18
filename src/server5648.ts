
const express = require('express')
import {handler5648} from "./handler5648";
const app = express()
app.get('/5648', handler5648)
app.listen(3000, () => {})
        