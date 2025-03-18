
const express = require('express')
import {handler8667} from "./handler8667";
const app = express()
app.get('/8667', handler8667)
app.listen(3000, () => {})
        