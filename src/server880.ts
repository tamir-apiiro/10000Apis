
const express = require('express')
import {handler880} from "./handler880";
const app = express()
app.get('/880', handler880)
app.listen(3000, () => {})
        