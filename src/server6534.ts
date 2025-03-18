
const express = require('express')
import {handler6534} from "./handler6534";
const app = express()
app.get('/6534', handler6534)
app.listen(3000, () => {})
        