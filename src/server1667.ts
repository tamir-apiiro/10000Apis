
const express = require('express')
import {handler1667} from "./handler1667";
const app = express()
app.get('/1667', handler1667)
app.listen(3000, () => {})
        