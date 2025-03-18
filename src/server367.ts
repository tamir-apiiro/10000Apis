
const express = require('express')
import {handler367} from "./handler367";
const app = express()
app.get('/367', handler367)
app.listen(3000, () => {})
        