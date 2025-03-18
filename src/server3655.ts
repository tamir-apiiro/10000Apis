
const express = require('express')
import {handler3655} from "./handler3655";
const app = express()
app.get('/3655', handler3655)
app.listen(3000, () => {})
        