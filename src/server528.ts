
const express = require('express')
import {handler528} from "./handler528";
const app = express()
app.get('/528', handler528)
app.listen(3000, () => {})
        