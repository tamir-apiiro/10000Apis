
const express = require('express')
import {handler3954} from "./handler3954";
const app = express()
app.get('/3954', handler3954)
app.listen(3000, () => {})
        