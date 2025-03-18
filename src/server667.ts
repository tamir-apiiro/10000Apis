
const express = require('express')
import {handler667} from "./handler667";
const app = express()
app.get('/667', handler667)
app.listen(3000, () => {})
        