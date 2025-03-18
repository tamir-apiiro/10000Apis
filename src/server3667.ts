
const express = require('express')
import {handler3667} from "./handler3667";
const app = express()
app.get('/3667', handler3667)
app.listen(3000, () => {})
        