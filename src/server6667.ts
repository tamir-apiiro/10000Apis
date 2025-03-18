
const express = require('express')
import {handler6667} from "./handler6667";
const app = express()
app.get('/6667', handler6667)
app.listen(3000, () => {})
        