
const express = require('express')
import {handler2667} from "./handler2667";
const app = express()
app.get('/2667', handler2667)
app.listen(3000, () => {})
        