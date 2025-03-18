
const express = require('express')
import {handler6926} from "./handler6926";
const app = express()
app.get('/6926', handler6926)
app.listen(3000, () => {})
        