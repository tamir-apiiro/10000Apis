
const express = require('express')
import {handler6562} from "./handler6562";
const app = express()
app.get('/6562', handler6562)
app.listen(3000, () => {})
        