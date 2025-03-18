
const express = require('express')
import {handler3858} from "./handler3858";
const app = express()
app.get('/3858', handler3858)
app.listen(3000, () => {})
        