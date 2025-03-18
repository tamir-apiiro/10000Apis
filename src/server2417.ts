
const express = require('express')
import {handler2417} from "./handler2417";
const app = express()
app.get('/2417', handler2417)
app.listen(3000, () => {})
        