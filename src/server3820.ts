
const express = require('express')
import {handler3820} from "./handler3820";
const app = express()
app.get('/3820', handler3820)
app.listen(3000, () => {})
        