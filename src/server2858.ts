
const express = require('express')
import {handler2858} from "./handler2858";
const app = express()
app.get('/2858', handler2858)
app.listen(3000, () => {})
        