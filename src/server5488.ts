
const express = require('express')
import {handler5488} from "./handler5488";
const app = express()
app.get('/5488', handler5488)
app.listen(3000, () => {})
        