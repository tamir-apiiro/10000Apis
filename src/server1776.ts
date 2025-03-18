
const express = require('express')
import {handler1776} from "./handler1776";
const app = express()
app.get('/1776', handler1776)
app.listen(3000, () => {})
        