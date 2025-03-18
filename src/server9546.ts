
const express = require('express')
import {handler9546} from "./handler9546";
const app = express()
app.get('/9546', handler9546)
app.listen(3000, () => {})
        